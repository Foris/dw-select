---

# dw-select

---

A smart select component to Darwined.

(here component image)

**dwSelect** show *options* divide into *groups*, one option can be insert in many groups.

Every **option** has a *primary text* that is the main content and a *secundary* text that is a context or specific content for that options

**dwSelect** has its own *search sintax*:

## filter all options:

(image)

Just type what you want and *dwSelect* search you text into **all primary and secondly content in every groups**

## filter by groups

(image)

If yo begin typing whit a **colon** ( **:** ), *dwSelect* interprets that you want to **search by groups, and show only the groups that match whit you text**.

## filter by groups and options

(image)

If you filter by groups and add a **space** the next word **filter the options o the filter groups**.


# Index

---

# 1.- Install

---

1.1.- Install dependencies from bower into your project

```javascript
  bower install --save dw-select
```

---

1.2.- Include dependencies in your html:

```html
<!-- dw-filter dependencies -->
<script src="./bower_components/jquery/dist/jquery.min.js"></script>
<script src="./component/dw-select.js"></script>
<link rel="stylesheet" type="text/css" href="./component/dw-select.css">
```

---

# 2.- Use

---

Execute the dwFilter class on a selector. It will be rendered a dw-filter element in this container inherit its position and width.

```javascript
$('#id').dwFilter();
```

 ---

 # 3.- API

 ---

 ## 3.1.- Init
If the dwSelect() class has an object the API interprets that is a new element and create it.


The API accepts the next configurations:

### 3.1.- data:
dwSelect recives the next configuration:

```javascript
$('#sample1').dwSelect({
  data: [
    {
      id: 1,
      primary: 'Cat',
      secundary: 'Gray',
      selected: false,
      group: ['feline']
    },
    {
      id: 2,
      primary: 'Dog',
      secundary: 'White',
      selected: false,
      group: ['canine']
    },
  ]
});
```

---

The next are the fields of an option object:

- - id: An identifier

- - primary: The text that show in the first line of an option

- - secundary: The text that show in the second line of an option

- - selected: Indicate if this particular options has selected

- - group: The groups where the option will be inserted, one option can be insert in many groups


## 3.3.- Destroy
This methods empty the container div and remove class too.
```javascript
$('#id').dwFilter('destroy');
```

---

# 4.- Listeners

---

When one option was selected dwSelect trigger a change events that you can listen as follow:

```javascript
$('#id').on({
  change: function(event){
    var result = $('#id').data('result');
    console.log("sample1 data: ", result);
  }
});
```

---

# 5.- Demo

---

You can view a local demo installing the component and open /bower_components/dw-select/**index.html** in your browser (localhost/your_rute).

You must change the bower_components dependencies rutes as follow:

```html
<script src="../jquery/dist/jquery.min.js"></script>
<script src="../underscore/underscore-min.js"></script>
```

---

# 6.- Possible problems

---

### 6.1.- Don't show svg background-image:

Confirm that your server are serving well the svg files, add to your ***.htacces*** the follow:
```bash
AddType image/svg+xml .svg .svgz
```
