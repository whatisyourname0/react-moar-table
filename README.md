# react-moar-table

react table with more features from the courtesy of npm library [react-table!](https://react-table-v7.tanstack.com)

# What's more than react-table?

- Sticky columns
- Scroll observe event
- Optimized column resize event

# Install

```
npm install react-moar-table
```

# Usage

```javascript
export default function MyTable({
  columns,
  data,
  minWidth,
  width,
  hoveredColor,
  clickedColor,
}) {
  return (
    <Table
      columns={columns}
      data={data}
      minWidth={minWidth}
      width={width}
      hoveredColor={hoveredColor}
      clickedColor={clickedColor}
    />
  );
}
```

## 1. columns

Put column array in here. Identical with react-table. Must be provided [See react-table column usage!](https://react-table-v7.tanstack.com/docs/api/useTable)

## 2. data

Put data array in here. Identical with react-table. Must be provided [See react-table data usage!](https://react-table-v7.tanstack.com/docs/api/useTable)

## 3. minWidth

Minimum width of columns. Must be integer or string type.

## 4. Width

Default width of columns. Must be integer or string tpye.

## 5. hoveredColor

color of hovered cell in table. Must be string type.

## 6. clickedColor

color of sorted column in table. Must be string type.

# License

Under MIT license :)
