
import { createApiValidator, ValidationError } from "./api-validator";
import { EventContext, TestContext, WSSContext } from "./text-context";

export async function executeWSSCheck(
    wssCheck: any,
    globalContext: TestContext,
    globalWSSContext: WSSContext,
    eventContext: EventContext
) {
    const validator = createApiValidator(globalContext);
    const result = {
        wsActor: {
            success: true,
            matched: 0,
            total: wssCheck.expectWSActor?.length || 0,
            errors: [] as Array<{ eventIndex: number; event: any; errors: ValidationError[] }>
        },
        wsRecipient: {
            success: true,
            matched: 0,
            total: wssCheck.expectWSRecipient?.length || 0,
            errors: [] as Array<{ eventIndex: number; event: any; errors: ValidationError[] }>
        },
        get success() {
            return this.wsActor.success && this.wsRecipient.success;
        }
    };

    // validate event
    const validateEvent = (actualEvent: any, expectedEvent: any): ValidationError[] => {
        const errors: ValidationError[] = [];
        
        // check type
        if (expectedEvent.type) {
            const typeErrors = validator.validate(actualEvent.type, expectedEvent.type);
            errors.push(...typeErrors);
        }

        // check data
        if (expectedEvent.data) {
            const dataErrors = validator.validate(actualEvent.data || {}, expectedEvent.data);
            errors.push(...dataErrors);
        }

        // check includes
        if (expectedEvent.includes) {
            const includeErrors = validator.validate(
                actualEvent.includes || {}, 
                expectedEvent.includes
            );
            errors.push(...includeErrors);
        }

        return errors;
    };

    // check event wsActor
    if (wssCheck.expectWSActor) {
        for (let i = 0; i < wssCheck.expectWSActor.length; i++) {
            const expectedEvent = wssCheck.expectWSActor[i];
            const actualEvent = globalWSSContext.data.wsActor[i];

            if (!actualEvent) {
                result.wsActor.errors.push({
                    eventIndex: i,
                    event: null,
                    errors: [{
                        path: '',
                        expected: 'Event exists',
                        actual: 'Missing event',
                        message: `Missing expected wsActor event at index ${i}`
                    }]
                });
                result.wsActor.success = false;
                continue;
            }

            const eventErrors = validateEvent(actualEvent, expectedEvent);
            if (eventErrors.length > 0) {
                result.wsActor.errors.push({
                    eventIndex: i,
                    event: actualEvent,
                    errors: eventErrors
                });
                result.wsActor.success = false;
            } else {
                result.wsActor.matched++;
            }
        }
    }

    // check wsRecipient
    if (wssCheck.expectWSRecipient) {
        for (let i = 0; i < wssCheck.expectWSRecipient.length; i++) {
            const expectedEvent = wssCheck.expectWSRecipient[i];
            const actualEvent = globalWSSContext.data.wsRecipient[i];

            if (!actualEvent) {
                result.wsRecipient.errors.push({
                    eventIndex: i,
                    event: null,
                    errors: [{
                        path: '',
                        expected: 'Event exists',
                        actual: 'Missing event',
                        message: `Missing expected wsRecipient event at index ${i}`
                    }]
                });
                result.wsRecipient.success = false;
                continue;
            }

            const eventErrors = validateEvent(actualEvent, expectedEvent);
            if (eventErrors.length > 0) {
                result.wsRecipient.errors.push({
                    eventIndex: i,
                    event: actualEvent,
                    errors: eventErrors
                });
                result.wsRecipient.success = false;
            } else {
                result.wsRecipient.matched++;
            }
        }
    }
    result.wsActor.errors.sort((a, b) => a.eventIndex - b.eventIndex);
    result.wsRecipient.errors.sort((a, b) => a.eventIndex - b.eventIndex);

    return result;
}