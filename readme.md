# 📦 react-tailwind-form-input



A **React + TypeScript** component with built-in **validation**, styled using **Tailwind CSS**. Includes a custom hook `useFormInput` for managing input value, error state, and validation logic.



---



<br />





## ✨ Features



- 🧩 Reusable form components: `FormInput`, `FormSelect`, `FormTextarea`

- ✅ Built-in validations: email, number, text, min/max length, custom regex, required

- 🔍 Custom validator support for all form components

- 🧠 Custom hooks: `useFormInput`, `useFormSelect`, `useFormTextarea` for cleaner logic

- 🎨 Tailwind CSS styling with `clsx` and `tailwind-merge` for intelligent class merging

- 🎯 Custom option rendering for select components

- 📝 Support for controlled and uncontrolled components

- ⚙️ Full TypeScript support

- 📦 Publish-ready for npm



---



<br />



## 📦 Installation



```bash

npm install react-tailwind-form-input

```



<br />





## 🚀 Usage

### Installation

```bash
npm install react-tailwind-form-input
```

### Basic Example

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

### FormSelect Example

```typescript
import { FormSelect, useFormSelect } from 'react-tailwind-form-input';

const SelectExample = () => {
  const countrySelect = useFormSelect({
    initialValue: '',
    validations: { required: true },
  });

  const countries = [
    { value: 'us', label: 'United States', key: 'country-us' },
    { value: 'uk', label: 'United Kingdom', key: 'country-uk' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <FormSelect
      name="country"
      value={countrySelect.value}
      onChange={countrySelect.onChange}
      error={countrySelect.error}
      options={countries}
      placeholder="Select a country"
      defaultValue="us" // Optional initial value
    />
  );
};
```

### FormTextarea Example

```typescript
import { FormTextarea, useFormTextarea } from 'react-tailwind-form-input';

const TextareaExample = () => {
  const messageTextarea = useFormTextarea({
    initialValue: '',
    validations: { minLength: 10, maxLength: 500 },
  });

  return (
    <FormTextarea
      name="message"
      value={messageTextarea.value}
      onChange={messageTextarea.onChange}
      error={messageTextarea.error}
      placeholder="Enter your message"
      rows={5}
    />
  );
};
```



<br />





## 🔧 Hooks

### useFormInput

| Option                 | Type                                | Description                                        |

| ---------------------- | ----------------------------------- | -------------------------------------------------- |

| `initialValue`         | `string`                            | Initial input value                                |

| `validations`          | `ValidationRules \|\| false`                   | Built-in validation config                         |

| `customValidator`      | `(value: string) => true \| string` | Custom validator returning `true` or error message |

| `suppressDefaultError` | `boolean`                           | Disable auto error rendering (optional)            |

**Returns:**
- `value`: Current input value
- `error`: Error message (if any)
- `onChange`: Change event handler
- `validate`: Function to manually validate the input

### useFormSelect

| Option                 | Type                                | Description                                        |

| ---------------------- | ----------------------------------- | -------------------------------------------------- |

| `initialValue`         | `string`                            | Initial select value                               |

| `validations`          | `SelectValidationRules \|\| false` | Built-in validation config                         |

| `customValidator`      | `(value: string) => true \| string` | Custom validator returning `true` or error message |

| `suppressDefaultError` | `boolean`                           | Disable auto error rendering (optional)            |

**Returns:**
- `value`: Current select value
- `error`: Error message (if any)
- `onChange`: Change event handler
- `validate`: Function to manually validate the select

### useFormTextarea

| Option                 | Type                                | Description                                        |

| ---------------------- | ----------------------------------- | -------------------------------------------------- |

| `initialValue`         | `string`                            | Initial textarea value                            |

| `validations`          | `TextareaValidationRules \|\| false` | Built-in validation config                         |

| `customValidator`      | `(value: string) => true \| string` | Custom validator returning `true` or error message |

| `suppressDefaultError` | `boolean`                           | Disable auto error rendering (optional)            |

**Returns:**
- `value`: Current textarea value
- `error`: Error message (if any)
- `onChange`: Change event handler
- `validate`: Function to manually validate the textarea





<br />



## Built-in Validation Rules

### ValidationRules (for Input and Textarea)

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

### SelectValidationRules (for Select)

```typescript
{
  required?: boolean;
  customValidator?: (value: string) => true | string;
}
```



<br />



## 🧩 Components

### FormInput

| Prop             | Type                                         | Description                       |

| ---------------- | -------------------------------------------- | --------------------------------- |

| `name`           | `string`                                     | Input name                        |

| `value`          | `string`                                     | Current value                     |

| `onChange`       | `(e: ChangeEvent<HTMLInputElement>) => void` | Input change handler              |

| `error`          | `string` *(optional)*                        | Error message (from hook)         |

| `placeholder`    | `string` *(optional)*                        | Input placeholder text            |

| `type`           | `string` *(optional)*                        | Input type (e.g. `text`, `email`) |

| `className`      | `string` *(optional)*                        | Wrapper className                 |

| `inputClassName` | `string` *(optional)*                        | Input element className           |

| `showError`      | `boolean` *(default: true)*                  | Show error message below input    |

### FormSelect

| Prop             | Type                                         | Description                       |

| ---------------- | -------------------------------------------- | --------------------------------- |

| `name`           | `string`                                     | Select name                        |

| `value`          | `string` *(optional)*                        | Current value (controlled)        |

| `defaultValue`   | `string` *(optional)*                        | Initial value (uncontrolled)      |

| `onChange`       | `(e: ChangeEvent<HTMLSelectElement>) => void` | Select change handler             |

| `options`        | `SelectOption[]`                             | Array of select options            |

| `error`          | `string` *(optional)*                        | Error message (from hook)         |

| `placeholder`    | `string` *(optional)*                        | Placeholder option text           |

| `className`      | `string` *(optional)*                        | Wrapper className                 |

| `selectClassName` | `string` *(optional)*                        | Select element className           |

| `showError`      | `boolean` *(default: true)*                  | Show error message below select   |

| `disabled`       | `boolean` *(optional)*                        | Disable the select                |

| `renderOption`   | `(props: CustomOptionProps) => ReactElement` *(optional)* | Custom option renderer |

**SelectOption Interface:**
```typescript
interface SelectOption {
  value: string;
  label: string;
  key?: string; // Optional custom key (defaults to value)
}
```

### FormTextarea

| Prop             | Type                                         | Description                       |

| ---------------- | -------------------------------------------- | --------------------------------- |

| `name`           | `string`                                     | Textarea name                      |

| `value`          | `string`                                     | Current value                     |

| `onChange`       | `(e: ChangeEvent<HTMLTextAreaElement>) => void` | Textarea change handler        |

| `error`          | `string` *(optional)*                        | Error message (from hook)         |

| `placeholder`    | `string` *(optional)*                        | Textarea placeholder text         |

| `rows`           | `number` *(optional, default: 4)*            | Number of rows                    |

| `cols`           | `number` *(optional)*                        | Number of columns                 |

| `className`      | `string` *(optional)*                        | Wrapper className                 |

| `textareaClassName` | `string` *(optional)*                        | Textarea element className        |

| `showError`      | `boolean` *(default: true)*                  | Show error message below textarea |

| `disabled`       | `boolean` *(optional)*                        | Disable the textarea              |



<br />



## 🛠 Advanced Examples

### Custom Validation Example

```typescript
const usernameInput = useFormInput({
  initialValue: '',
  validations: { minLength: 4 },
  customValidator: (val) =>
    val.includes('admin') ? 'Username cannot contain "admin"' : true,
});
```

### Custom Option Rendering

```typescript
import { FormSelect, CustomOptionProps } from 'react-tailwind-form-input';

const CustomOption = ({ option, index }: CustomOptionProps) => (
  <option 
    value={option.value}
    data-custom-index={index}
    className="custom-option"
  >
    {option.label}
  </option>
);

<FormSelect
  name="country"
  value={selectedValue}
  onChange={handleChange}
  options={countries}
  renderOption={CustomOption}
/>
```

### Using cn Utility

The package exports a `cn` utility function that combines `clsx` and `tailwind-merge` for intelligent class merging:

```typescript
import { cn } from 'react-tailwind-form-input';

const customClass = cn(
  'base-class',
  condition && 'conditional-class',
  'px-2 px-4' // Will merge to 'px-4'
);
```

### Controlled vs Uncontrolled Select

```typescript
// Controlled component
<FormSelect
  value={selectedValue}
  onChange={handleChange}
  options={options}
/>

// Uncontrolled component with defaultValue
<FormSelect
  defaultValue="option1"
  onChange={handleChange}
  options={options}
/>
```



<br />

## 📦 Dependencies

- **clsx**: For conditional class joining
- **tailwind-merge**: For intelligent Tailwind CSS class merging
- **React**: React library
- **TypeScript**: Type definitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License




MIT © jyoti_ranjan_biswal