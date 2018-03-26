# CustomArrayDisplay
    
__React Components:__ *[ArrayDisplay](./ArrayDisplay), [EditArrayDisplay](./EditArrayDisplay)*

__SASS:__ *[_CustomArrayDisplay.scss](../../../../sass/modules/_CustomArrayDisplay.scss)*

    
## ArrayDisplay
   > __ArrayDisplay__ maps provided array of objects, returning __LabelArrayDisplay__ within *div#array-display*  
   >
   > __LabelArrayDisplay__ generates *div.label-container* for provided object

__instantiation:__ 
```jsx
<ArrayDisplay 
    array={someArray}
/>
``` 

### ArrayDisplay
   
    type: stateless functional component
           
    props:
        required:
            array  <array> [{id: string, label: string, data: (int, float, or string)}]
            
        
### LabelArrayDisplay
   
    type: stateless functional component
    
    props:
        required:
            id <string>
            label <string>
            data <string, int, || float>

                    
## EditArrayDisplay
    
   > __EditArrayDisplay__ maps provided array of objects, returning __EditLabelArrayDisplay__  within
    *div#edit-array-display*
   > 
   >__EditLabelArrayDisplay__ generates *div.input-container* for provided object using props.type to determine 
   which to type of *.input-container*  to construct 

__instantiation:__ 
```jsx
<EditArrayDisplay 
    array={someArray}
/>
``` 


__imported files:__
   + *__[/CustomFormInputs/](../CustomFormInputs)__*
       + *CustomInput*
       + *CustomInputRange*
       + *CustomInputWithDropdown*
       + *CustomNumericInputWithDropdown*
       + *CustomNumericInputWithSwitch*
       + *CustomInputDropdownDate*
       + *CustomInputSwitch*
  
  

### EditArrayDisplay

      type: stateless functional component
      
      props:
          required:
              array <array> [{id: string, label: string, data: (int, float, or string)}]
  
### EditLabelDataDisplay

    type: stateless functional component

    props:
      required:
         type <string>  ('input', 'input-range', 'numeric-input-with-dropdown', 
                        'numeric-input-with-switch', 'input-with-dropdown', 'dropdown-date', 'switch')

     type='input'
          required:
              id <string>
              label <string>
              showValidation <string> ('invalid', 'valid')
              onInputChange <function>

          optional:
              inputType <string>
              data <string, int, || float>

     type='input-range'
          required:
              id <string>
              label <string>
              showValidation <string> ('invalid', 'valid')
              onInputChange <function>
              range <object> {min, max, step, default, showBelow}
              rangeLabel <object> {min, max}

          optional:
              data <int || float>

     type='numeric-input-with-dropdown'
          required:
              id <string>
              label <string>
              showValidation <string> ('invalid', 'valid')
              dropdown <object>
              dropdownDefault <string>
              onInputChange <function>

          optional:
              data <int || float>

     type='numeric-input-with-switch'
          required:
             id <string>
             label <string>
             showValidation <string> ('invalid', 'valid')
             switchValue <object>
             switchDefault <string>
             onInputChange <function>

          optional:
             data <int || float>

     type='input-with-dropdown'
          required:
              id <string>
              label <string>
              showValidation <string> ('invalid', 'valid')
              dropdown <object>
              dropdownDefault <string>
              onInputChange <function>

          optional:
              data <string, int, || float>

     type='dropdown-date'
          required:
              id <string>
              label <string>
              showValidation <string> ('invalid', 'valid')
              onInputChange <function>

          optional:
              data <string in YYYY-MM-DD format>

     type='switch'
         required:
             id <string>
             choice <object> {first, second}
             switchDefault <string>
             switchFunction <function>




## _CustomArrayDisplay.scss
__class-selectors:__ 
 > `.label-container`, `.input-container` `.bold-label`, `.data-label`, `.input-alone`, 
 `.input-with-dropdown`, `.input-date`, `.numeric-input-with-dropdown`, `.numeric-input-with-switch`, 
 `.range-container`, `.inner-range-container`, `.range-label`, `.above-range-label`, 
 `.type-range-label`
 
__id-selectors:__
 > `#array-display`, `#edit-array-display`
 
__type-selectors:__ 
 > `input[type="range"]`
 
 
__$variables:__
> `$headline-font`, `$text-color`, `$body-font`


__@mixins:__
> `input`
 
 

