---
title: "Basic Syntax in Markdown"
date: 2026-02-12T20:29:27+07:00
lastmod: 2026-02-12T20:29:27+07:00
draft: false

author: "Sarah"
weight: 3

tags: []
categories: []

toc: true
showReadingTime: true
---

---
## Heading
There are 6 level hierarchy of heading in Markdown. To create header, add hashtag symbols `#` before you write the headers. The amount of `#` you add will respond the 1-6 typeface size of your heading level hierarchy.

|Heading level hierarchy|Markdown syntax|Example|
|---|---|---|
|Level 1| Title page| `# Heading level 1`|
|Level 2| Main topic| `## Heading level 2`|
|Level 3| Sub topic| `### Heading level 3`|


**Rendered output example:**
# Heading level 1
## Heading level 2
### Heading level 3
###### Heading level 6

---

## Styling Text in Markdown

### Bold
To emphasize your text with bold you need to wrap your text with double aterisk `*` or double underscore `_`.
|Markdown Syntax|Example|Rendered Output|
|---|---|---|
|`** **`|`**this is bold text**`|**this is bold text**|
|`__ __`|`__this is bold text__`|__this is bold text__|

### Italic
To create italic text, you have to add single arterisk symbol `*` or underscore `_` before and after your text, both work in markdown.  Choose one symbol you preferred and don't mix them up. 

|Markdown Syntax|Example|Rendered Output|
|---|---|---|
|`* *`|`*this is italic*`| *this is italic*|
|`_ _`| `_this is italic too_`| _this is italic too_|

#### Bold and Italic
To create bold and italic text at the same time wrap your text with triple arterisk `***` or underscore `___`. 
|Markdown Syntax|Example|Rendered Output|
|---|---|---|
|`*** ***`| `***your text***`| ***your text***|

**Or if you want to mix it up:**
|Markdown Syntax|Example|Rendered Output|
|---|---|---|
|`* ** ** *`|`*italic **bold and italic** italic*`| *italic **bold and italic** italic*|

### Strikethrough
To strike through your text add double tildes `~~ ~~` before and after your text.

Example: 
```
~~strikthrough~~
```

Rendered Output:  ~~strikethrough~~

### Blockquotes
To call your audience attention by quoting your text, use the symbol of greater-than `>` before your text.

Example:  
```
>This is quote text
```

Rendered Output:  
>This is quote text

### Inline Code
To denote a text as code, wrap your text with single backticks (`).

Example: `` `code` ``

Rendered Output: `code`

### Code Blocks
To blocks your text with code use triple backticks (```) before and after your text.

Example:   
```` 
```  
this is code blocks

``` 
````

Rendered output:  
```
this is code blocks
```

### Lists
#### Ordered Lists
To make ordered list you can add any number then followed by your item lists. The number not strict as numerical order, as long as it's number then your item list, the rendered output will be still as ordered lists.

Example:  
```
1. item 1
2. item 2
3. item 3

or
1. item 1
7. item 2
17. item 3

```

Rendered output:  
1. item 1
2. item 2
3. item 3

or
1. item 1
7. item 2
17. item 3

#### Unordered Lists
There are 3 ways to create unordered lists, you can use the single symbol of arterisk `*`, plus `+`, or minus `-` then followed by space and your item lists. Choose one symbol and don't combine them in one list category.

Example:
```
- item 
- item 
- item
 
 or
 + item
 + item
 + item

 or 
 * item
 * item 
 * item

 don't 
 - item
 + item
 * item
 ```

 Rendered output:  
 - item 
- item 
- item
 
 or
 + item
 + item
 + item

 or 
 * item
 * item 
 * item

 don't 
 - item
 + item
 * item

### Link
There are two common style of links you can make in markdown. Inline links and reference style links. The inline links is used when you only have few links and you want to create hyperlinks directly within the text. The reference style links is when you have to put a lot of link on your page and want to make your content format cleaner by separating the reference link and actual URL link.

#### Inline links
To create inline links, simply wrap your link text in a set of square brackets `[]` followed by the URL in a set of parentheses `()`.  

Format: 
```
[Link text](URL)
```  

Example: 
```
Go visit [Google](https://google.com)
```

Rendered output:  

Go visit [Google](https://google.com)

#### Reference Style Links
To create reference style links the format consists of two parts:

Format:  
1. The link within your text content:
```
[Link text][link title on your reference list]
```

2. The actual link address on your reference list at the end of your page or elsewhere in the same page:
```
[link title on your reference list]: actual link address
```

Example:   
1. In you content:  
```
Go visit [google][1]
```

2. In your reference list:  
```
[1]: https://google.com
```

Rendered output:
Go visit [google][1]

### Image
To display image on your page add exclamation mark `!` followed by your image text in a set of square brackets `[]` then the image URL in a set of parentheses `()`. Type this format with no space.

Markdown format:  
`![image text](URL)`

Example:  
```
![Green view with tree](https://images.pexels.com/photos/32473937/pexels-photo-32473937.jpeg)
```

Rendered output:  
![Green View with tree](https://images.pexels.com/photos/32473937/pexels-photo-32473937.jpeg)

---

Continue to [advance markdown syntax](/advance/)


[1]: https://google.com