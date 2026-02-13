var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Markdown is a ligh-weight markup language text-to-HTML conversion language. It was designed for easy-to-read, easy-to-write, and easy-to-edit. Markdown use simple syntax for formatting text.\nAs text-to-HTML conversion language, the primary use of markdown is helping writer to create content for web without struggling on heavy-code text format. Writers will be focus more on the content rather than the format code text.\nMarkdown was created by John Gruber in 2004 and released as Open-source.\nLet’s start with Basic Syntax in Markdown",
    "description": "Markdown is a ligh-weight markup language text-to-HTML conversion language. It was designed for easy-to-read, easy-to-write, and easy-to-edit. Markdown use simple syntax for formatting text.\nAs text-to-HTML conversion language, the primary use of markdown is helping writer to create content for web without struggling on heavy-code text format. Writers will be focus more on the content rather than the format code text.\nMarkdown was created by John Gruber in 2004 and released as Open-source.",
    "tags": [],
    "title": "Overview",
    "uri": "/overview/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Heading\rThere are 6 level hierarchy of heading in Markdown. To create header, add hashtag symbols # before you write the headers. The amount of # you add will respond the 1-6 typeface size of your heading level hierarchy.\nHeading level hierarchy Markdown syntax Example Level 1 Title page # Heading level 1 Level 2 Main topic ## Heading level 2 Level 3 Sub topic ### Heading level 3 Rendered output example:\nHeading level 1\rHeading level 2\rHeading level 3\rHeading level 6\rStyling Text in Markdown\rBold\rTo emphasize your text with bold you need to wrap your text with double aterisk * or double underscore _.\nMarkdown Syntax Example Rendered Output ** ** **this is bold text** this is bold text __ __ __this is bold text__ this is bold text Italic\rTo create italic text, you have to add single arterisk symbol * or underscore _ before and after your text, both work in markdown. Choose one symbol you preferred and don’t mix them up.\nMarkdown Syntax Example Rendered Output * * *this is italic* this is italic _ _ _this is italic too_ this is italic too Bold and Italic\rTo create bold and italic text at the same time wrap your text with triple arterisk *** or underscore ___.\nMarkdown Syntax Example Rendered Output *** *** ***your text*** your text Or if you want to mix it up:\nMarkdown Syntax Example Rendered Output * ** ** * *italic **bold and italic** italic* italic bold and italic italic Strikethrough\rTo strike through your text add double tildes ~~ ~~ before and after your text.\nExample:\n~~strikthrough~~\rRendered Output: strikethrough\nBlockquotes\rTo call your audience attention by quoting your text, use the symbol of greater-than \u003e before your text.\nExample:\n\u003eThis is quote text\rRendered Output:\nThis is quote text\nInline Code\rTo denote a text as code, wrap your text with single backticks (`).\nExample: `code`\nRendered Output: code\nCode Blocks\rTo blocks your text with code use triple backticks (```) before and after your text.\nExample:\n``` this is code blocks ``` Rendered output:\nthis is code blocks\rLists\rOrdered Lists\rTo make ordered list you can add any number then followed by your item lists. The number not strict as numerical order, as long as it’s number then your item list, the rendered output will be still as ordered lists.\nExample:\n1. item 1 2. item 2 3. item 3 or 1. item 1 7. item 2 17. item 3\rRendered output:\nitem 1 item 2 item 3 or\nitem 1 item 2 item 3 Unordered Lists\rThere are 3 ways to create unordered lists, you can use the single symbol of arterisk *, plus +, or minus - then followed by space and your item lists. Choose one symbol and don’t combine them in one list category.\nExample:\n- item - item - item or + item + item + item or * item * item * item don't - item + item * item\rRendered output:\nitem item item or\nitem item item or\nitem item item don’t\nitem item item Link\rThere are two common style of links you can make in markdown. Inline links and reference style links. The inline links is used when you only have few links and you want to create hyperlinks directly within the text. The reference style links is when you have to put a lot of link on your page and want to make your content format cleaner by separating the reference link and actual URL link.\nInline links\rTo create inline links, simply wrap your link text in a set of square brackets [] followed by the URL in a set of parentheses ().\nFormat:\n[Link text](URL)\rExample:\nGo visit [Google](https://google.com)\rRendered output:\nGo visit Google\nReference Style Links\rTo create reference style links the format consists of two parts:\nFormat:\nThe link within your text content: [Link text][link title on your reference list]\rThe actual link address on your reference list at the end of your page or elsewhere in the same page: [link title on your reference list]: actual link address\rExample:\nIn you content: Go visit [google][1]\rIn your reference list: [1]: https://google.com\rRendered output: Go visit google\nImage\rTo display image on your page add exclamation mark ! followed by your image text in a set of square brackets [] then the image URL in a set of parentheses (). Type this format with no space.\nMarkdown format:\n![image text](URL)\nExample:\n![Green view with tree](https://images.pexels.com/photos/32473937/pexels-photo-32473937.jpeg)\rRendered output:\nContinue to advance markdown syntax",
    "description": "Heading\rThere are 6 level hierarchy of heading in Markdown. To create header, add hashtag symbols # before you write the headers. The amount of # you add will respond the 1-6 typeface size of your heading level hierarchy.\nHeading level hierarchy Markdown syntax Example Level 1 Title page # Heading level 1 Level 2 Main topic ## Heading level 2 Level 3 Sub topic ### Heading level 3 Rendered output example:",
    "tags": [],
    "title": "Basic Syntax in Markdown",
    "uri": "/basic/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Horizontal Rules\rTo create horizontal rule on your page, add 3 or more hyphens --- - - -, arterisks *** * * *, or underscores ___ _ _ _ in a single line. These will produce identical horizontal line.\nMarkdown syntax:\n--- - - - *** * * * ___ _ _ _\rRendered output:\nLine Breaks\rIn some tools enter doesn’t automatically break your line. To create line break in Markdown you can use double spaces at the end of your line text.\nExample:\nWith double spaces at the end of the first line:\nFirst line Second line\rThe rendered output:\nFirst line\nSecond line\nTables\rTo produce tables in your page I will separate into 3 explanation:\nCreate rows header\nUse pipes | to separate each column header. The example will be: | Title | Descriptions |\rCreate each column’s header\nAdd three or more hyphens--- within pipes | below the rows header. |---|---|\rFollowed the rest of content inside pipes | within the pipes. | Topic | Paragraph |\rThe complete format would be:\n| Title | Descriptions | |---|---| | Topic | Paragraph |\rThe rendered output:\nTitle Descriptions Topic Paragraph Alerts/Admonitions/Callouts\rMajority of Markdown applications don’t support this syntax. You can use this syntax of tools that support GitHub-Flavored Markdown (GFM) Alerts. There are 5 types of alerts available and commonly used. To create alerts on markdown in GFM supported tools, starting with greater-than symbol \u003e to create blockquotes, followed by the alert type in a set of square brackets with a single exclamation mark [!].\nThe format is:\n\u003e [!ALERT TYPE] \u003e Your alert content.\rThe common types of alert available including:\nNOTE: Callout information audiences should know. \u003e [!NOTE] \u003e This is note.\rTIP: Callout helful advice for audiences. \u003e [!TIP] \u003e This is tip.\rIMPORTANT: Crucial information for audiences. \u003e [!IMPORTANT] \u003e This is important key information.\rWARNING: Callout problems should avoid by the audiences. \u003e [!WARNING] \u003e This is warning.\rCAUTION: Potential negative outcomes or risks about actions audiences should know. \u003e [!CAUTION] \u003e This is caution.\rRendered output example:\n*Note: The display of alert will depends on the Markdown platform or tool you are using.\nNOTE:\nNote\rThis is note.\nTIP:\nTip\rThis is tip.\nIMPORTANT:\nImportant\rThis is important key information.\nWARNING:\nWarning\rThis is warning.\nCAUTION:\nCaution\rThis is caution.\nSee Markdown-supported tools for more information about the tools or platforms you may use for markdown best practice.",
    "description": "Horizontal Rules\rTo create horizontal rule on your page, add 3 or more hyphens --- - - -, arterisks *** * * *, or underscores ___ _ _ _ in a single line. These will produce identical horizontal line.\nMarkdown syntax:\n--- - - - *** * * * ___ _ _ _\rRendered output:",
    "tags": [],
    "title": "Advanced Syntax in Markdown",
    "uri": "/advance/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Productivity App:\nNotion: all-in-one knowledge management tools Obsidian: Markdown note-taking app Trello: kanban project management Joplin: note-taking app Logseq: note-taking app Typora: essay and report document editor Simplenote: note-taking app Social:\nReddit: dicussion forum Slack: team messaging and collaboration app Markdown Editor:\nStackedit: in-browser live view markdown editor marktext: open-source markdown editor VS Code: all-inone code editor Google Docs: docx to markdown converter Majority of tools and platform support markdown. The lists is the application and platform that you might be familiar with.",
    "description": "Productivity App:\nNotion: all-in-one knowledge management tools Obsidian: Markdown note-taking app Trello: kanban project management Joplin: note-taking app Logseq: note-taking app Typora: essay and report document editor Simplenote: note-taking app Social:\nReddit: dicussion forum Slack: team messaging and collaboration app Markdown Editor:\nStackedit: in-browser live view markdown editor marktext: open-source markdown editor VS Code: all-inone code editor Google Docs: docx to markdown converter Majority of tools and platform support markdown. The lists is the application and platform that you might be familiar with.",
    "tags": [],
    "title": "Markdown-Supported Tool",
    "uri": "/tool/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Version number: 1.0.0\nDate of Publication: 2026-02-13\nFirst published!",
    "description": "Version number: 1.0.0\nDate of Publication: 2026-02-13\nFirst published!",
    "tags": [],
    "title": "Changelog",
    "uri": "/changelog/index.html"
  },
  {
    "breadcrumb": "",
    "content": "About this guide\nAuthor: Sarah Amalia\nVisit more of my work at: sarah-amalia.netlify.app.\nFeel free to give me feedback: sarahamalia.tw@gmail.com\nI am open to technical writing projects and documentation collaborations\nResources\rJohn Gruber Markdown Guide Github Docs",
    "description": "About this guide\nAuthor: Sarah Amalia\nVisit more of my work at: sarah-amalia.netlify.app.\nFeel free to give me feedback: sarahamalia.tw@gmail.com\nI am open to technical writing projects and documentation collaborations\nResources\rJohn Gruber Markdown Guide Github Docs",
    "tags": [],
    "title": "About This Guide",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
