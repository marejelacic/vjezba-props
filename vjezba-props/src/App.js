import Names from './Names';
import Users from './Users';

function App() {
  const users = [
    {
      ime: 'Branko',
      prezime: 'Branković',
      dob: 32,
    },
    {
      ime: 'Janko',
      prezime: 'Janković',
      dob: 42,
    },
    {
      ime: 'Stanko',
      prezime: 'Stanković',
      dob: 52,
    },
  ];
  return (
    <div>
      <Names>Korisnici</Names>
      <Users users={users}></Users>
    </div>
  );
}
  
       
  

export default App;
