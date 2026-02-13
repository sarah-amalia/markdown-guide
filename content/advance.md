---
title: "Advanced Syntax in Markdown"
date: 2026-02-12T20:29:57+07:00
lastmod: 2026-02-12T20:29:57+07:00
draft: false
type: divider

author: "Sarah"
weight: 4

tags: []
categories: []

toc: true
showReadingTime: true
---

## Horizontal Rules
To create horizontal rule on your page, add 3 or more hyphens `---` `- - -`, arterisks `***` `* * *`, or underscores `___` `_ _ _` in a single line. These will produce identical horizontal line.

Markdown syntax:  
```
---
- - -
***
* * *
___
_ _ _
```

Rendered output:  

---
- - -
***
* * *
___
_ _ _


## Line Breaks
In some tools `enter` doesn't automatically break your line. To create line break in Markdown you can use double spaces `  ` `  `  at the end of your line text.

Example:  
With double spaces at the end of the first line:
```
First line  
Second line
```

**The rendered output:**  
First line  
Second line

## Tables
To produce tables in your page I will separate into 3 explanation:
1. Create rows  header   
Use pipes `|` to separate each column header. The example will be:  
```
| Title | Descriptions |
```
2. Create each column's header  
Add three or more hyphens`---` within pipes `|` below the rows header.
```
|---|---|
```
3. Followed the rest of content inside pipes `|` within the pipes.  
```
| Topic | Paragraph |
```
**The complete format would be:**
```
| Title | Descriptions |
|---|---|
| Topic | Paragraph |

```
**The rendered output:**  
| Title | Descriptions |
|---|---|
| Topic | Paragraph |

## Alerts/Admonitions/Callouts
Majority of Markdown applications don't support this syntax. You can use this syntax of tools that support [GitHub-Flavored Markdown (GFM)][1] Alerts. There are 5 types of alerts available and commonly used. To create alerts on markdown in GFM supported tools, starting with greater-than symbol `>` to create blockquotes, followed by the alert type in a set of square brackets with a single exclamation mark `[!]`. 

The format is:  
```
> [!ALERT TYPE]
> Your alert content.
```

**The common types of alert available including:**   

- `NOTE`: Callout information audiences should know.
```
> [!NOTE]
> This is note.
```

- `TIP`: Callout helful advice for audiences.
```
> [!TIP]
> This is tip.
```

- `IMPORTANT`: Crucial information for audiences.
```
> [!IMPORTANT]
> This is important key information.
```

- `WARNING`: Callout problems should avoid by the audiences.
```
> [!WARNING]
> This is warning.
```

- `CAUTION`: Potential negative outcomes or risks about actions audiences should know.
```
> [!CAUTION]
> This is caution.
```

**Rendered output example:**  
***Note:** The display of alert will depends on the Markdown platform or tool you are using.

`NOTE`:
> [!NOTE]
> This is note.

`TIP`:  
> [!TIP]
> This is tip.

`IMPORTANT`:
> [!IMPORTANT]
> This is important key information.

`WARNING`:
> [!WARNING]
> This is warning.

`CAUTION`:
> [!CAUTION]
> This is caution.

---

See [Markdown-supported tools](/tool/) for more information about the tools or platforms you may use for markdown best practice.

[1]: https://github.github.com/gfm/