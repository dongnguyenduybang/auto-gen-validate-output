## Naming Conventions
  + Folder name: Kebab Case (example-folder)
  + File name: Kebab Case (example-folder)
  + Function name: Camel Case (executeStep)
  + Class name: Pascal Case (MessageResponse)
  + Decorator name: Pascal Case (IsNotEmpty)

  Example:
  - 📂 root
    - 📂 test-requests
      - 📂 send-message # kebab-case for folder requests
        - 📄 send-message.request.json # kebab-case for file request json
        - 📄 send-message.dto.ts # kebab-case for file request dto
        - 📄 send-message.spec.ts # kebab-case for file request spec
      - 📂 send-dm-message
        - 📄 send-dm-message.request.json
        - 📄 send-dm-message.dto.ts
        - 📄 send-dm-message.spec.ts

