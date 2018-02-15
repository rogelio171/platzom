# Platzom

**Platzom** is an invented language for the course of
[JavaScript Fundamentals](https://platzi.com/js)
from [Platzi](https://platzi.com).

## Description
The new language called **Platzom** use the following rules:
 * If the word ends with 'ar', those characters will be removed. Eg. Programar -> Program.
 * If the word starts with 'z', 'pe' will be added. Eg. zorro -> zorrope | zarpar -> zarp(by the first rule) -> zarppe.
 * If the translated word has 10 or more letters, it should be split in the middle using a hyphen. Eg. abecedario -> abece-dario.
 * If the word is a palindrome, none of the rules will be applied and the same word with intercalated uppercase and lowercase is returned. Eg. sometemos -> SoMeTeMoS.

## Installation

```
 npm install platzom
```

## How to use

```
import platzom from 'platzom'

platzom("Programar")  //Program
platzom("zorro")      //Zorrope
platzom("Zarpar")     //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos")  //SoMeTeMoS
```

## License

[MIT] (https://opensource.org/licenses/MIT)
