Array elements can be accessed through index number.

Index number starts from zero to array's property length minus one.

Here is an example:


```js
	var pets = ['cat', 'dog', 'rat'];

	console.log(pets[0]);
```

The above code will print the first element of `pets` array - string `cat`.

Array elements must be accessed through only using bracket notation.

Dot notation is invalid.

Valid notation:

```js
	console.log(pets[0]);
```

Invalid notation:
```
	console.log(pets.1);
```