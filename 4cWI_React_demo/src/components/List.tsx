const List = () => {
  const items = ["Coffee", "Tea", "Beer"];

  return (
    <ul className="list">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
