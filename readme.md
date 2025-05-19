# 📦 react-tailwind-form-input



A **React + TypeScript** component with built-in **validation**, styled using **Tailwind CSS**. Includes a custom hook `useFormInput` for managing input value, error state, and validation logic.



---



<br />





## ✨ Features



- 🧩 Reusable `FormInput` component

- ✅ Built-in validations: email, number, text, min/max length, custom regex

- 🔍 Custom validator support

- 🧠 `useFormInput` hook for cleaner logic

- 🎨 Tailwind CSS styling with override support

- ⚙️ TypeScript support

- 📦 Publish-ready for npm



---



<br />



## 📦 Installation



```bash

npm install react-tailwind-form-input

```



<br />





## 🚀 Usage

1. Import the component and hook:

```typescript

import { FormInput, useFormInput } from 'react-tailwind-form-input';

```

2. Use useFormInput hook in your component:

```typescript

import React from 'react';

import { FormInput, useFormInput } from 'react-tailwind-form-input';



const ExampleForm = () => {

  const emailInput = useFormInput({

    initialValue: '',

    validations: { email: true },

  });



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (emailInput.validate()) {

      alert('Valid Email: ' + emailInput.value);

    }

  };



  return (

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">

      <FormInput

        name="email"

        value={emailInput.value}

        onChange={emailInput.onChange}

        error={emailInput.error}

        placeholder="Enter your email"

      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">

        Submit

      </button>

    </form>

  );

};

```



<br />





## 🔧 Hook: useFormInput

| Option                 | Type                                | Description                                        |

| ---------------------- | ----------------------------------- | -------------------------------------------------- |

| `initialValue`         | `string`                            | Initial input value                                |

| `validations`          | `ValidationRules \|\| false`                   | Built-in validation config                         |

| `customValidator`      | `(value: string) => true \| string` | Custom validator returning `true` or error message |

| `suppressDefaultError` | `boolean`                           | Disable auto error rendering (optional)            |





<br />



## Built-in Validation Rules

```typescript

{

  email?: boolean;

  number?: boolean;

  text?: boolean;

  minLength?: number;

  maxLength?: number;

  regex?: string; // Custom regex string

}

```



<br />



## 🧩 Component: FormInput

| Prop             | Type                                         | Description                       |

| ---------------- | -------------------------------------------- | --------------------------------- |

| `name`           | `string`                                     | Input name                        |

| `value`          | `string`                                     | Current value                     |

| `onChange`       | `(e: ChangeEvent<HTMLInputElement>) => void` | Input change handler              |

| `error`          | `string`                                     | Error message (from hook)         |

| `placeholder`    | `string`                                     | Input placeholder text            |

| `type`           | `string` *(optional)*                        | Input type (e.g. `text`, `email`) |

| `className`      | `string` *(optional)*                        | Wrapper className                 |

| `inputClassName` | `string` *(optional)*                        | Input element className           |

| `showError`      | `boolean` *(default: true)*                  | Show error message below input    |



<br />



## 🛠 Custom Validation Example

```typescript

const usernameInput = useFormInput({

  initialValue: '',

  validations: { minLength: 4 },

  customValidator: (val) =>

    val.includes('admin') ? 'Username cannot contain "admin"' : true,

});

```



<br />



## 📄 License




MIT © jyoti_ranjan_biswal