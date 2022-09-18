# Test
![image](https://user-images.githubusercontent.com/111681330/190913769-9bcce10d-b719-402c-9fef-6366e9b61973.png)

## Test-task
The “List” page is a tab set. Each tab has a simple table. It has 2 columns. First column is “Name” or some other object identity. Second column is some amount or quantity. Please use the image below for your guidance. It’s rows are objects from the JSON above, filtered by “type” property. The “Income” tab will display only those objects, which have “type” === “income”. Other 3 tabs have exactly same filtering logic.
The URL of the page should be: /navigator?tab=<0..3>, where tab query parameter corresponds to a currently selected tab, and the type by which the table is filtered.
