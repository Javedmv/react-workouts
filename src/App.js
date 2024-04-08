function App1() {
  const arr = [
    { name: 'javed', email: 'javedmv123@gmail.com' },
    { name: 'sonu', email: 'sonu@gmail.com' },
    { name: 'manu', email: 'manu@gmail.com' }
  ];
  return (
    <>
      {arr.map((obj, i) => (
        <div key={i} className="App">
          <div className="profile-card">
            <h1>{obj.name}</h1>
            <p>Email: {obj.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App1;
