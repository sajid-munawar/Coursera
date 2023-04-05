function DessertsList({data}) {
  // Implement the component here.
  const lists = data
    .filter(item => item.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(item => <li>{item.name} - {item.calories} cal</li>)
  return <ul>
    {lists}
  </ul>;
}

export default DessertsList;
