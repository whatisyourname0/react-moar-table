# react-moar-table

react table with more features from the courtesy of react-table library!

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
export function MyTable({
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

See react-table

# License

Under MIT license
`