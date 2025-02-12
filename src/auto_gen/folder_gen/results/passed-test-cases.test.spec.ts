import axios from 'axios'; 



describe('Test cases from passed-test-cases.json', () => {

  it('should test payload: {"prefix":"duy12345","quantity":1,"badge":0}', async () => {

    const payload = { "prefix": "duy12345", "quantity": 1, "badge": 0 };

    const mockAPI = await axios.post('https://api-sb11.rpc.ziichat.dev/InternalFaker/MockUsers', payload, {})

    console.log(mockAPI)


  });

});
