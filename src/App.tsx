import { Text } from './components/polymorphic/Text';
import './styles/App.scss';

function App() {
  // const personList = [
  //   {id: 1, firstName: "Pavel", lastName: "Biryuchev"},
  //   {id: 2, firstName: "Levap", lastName: "Vehceuyrib"},
  //   {id: 3, firstName: "L123ewvap", lastName: "3123qweqeq"},
  //   {id: 4, firstName: "wqeqwe", lastName: "Vehceuyrib"},
  // ]

  return (
    <div className="App">

      {/* // ? Props
      <Greet name="Pasha" mmrCount={20} isLoggedIn={false}/>
      <PersonList persons={personList}/>
      <Status status="error"/>
      <Heading>Abobus!!!</Heading>
      <Oscar>
        <Heading>
          Oscar loser, because he lived Europian Football and became Chainiese player
        </Heading>
      </Oscar>
      <Greet name="ZxcPasha" isLoggedIn={true}/>

      <Button handleClick={(event, id) => console.log(`Button clicked ${event} ${id}`)}/>
      <Input value='' handleChange={(event) => console.log(event)}/>

      <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}

      {/* // ? State
      <LoggedIn/>
      <User/> */}

      {/* // ? useReducer, useContext
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider> */}

      {/* // ? useRef 
      <DomRef/>
      <MutableRef/> */}

      {/* // ? Class Component
      <Counter message='The count value is' /> */}

      {/* // ? Auth
      <Private isLoggedIn={false} component={Profile}/>
      <Private isLoggedIn={true} component={Profile}/> */}

      {/* // ? Generics
      <List items={["Batman", "Superman", "Flash"]} onClick={(item) => console.log(item)}/>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}/>
      <List items={personList} onClick={(item) => console.log(item)}/> */}

      {/* // ? Rescriting Props (never)
      <RandomNumber value={10} isPositive isNegative={false} isZero={false}/> 
      <RandomNumber value={10} isPositive/> */}

      {/* // ? Шаблонные литералы и исключения
      <Toast position='center'/> */}
      
      {/* // ! Wrapping HTML Elements & Omit
      <CustomButton variant='primary' onClick={() => console.log("Click!")}>
        Primary Button
      </CustomButton>
      <CustomInput placeholder='myBigPlaceholder'/> */}

      {/* // ? Extracting a Components Prop Types
      <CustomComponent name='Pavel' mmrCount={20} isLoggedIn={false} /> */}

      {/* // ! Polymorphic Components
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color="secondary">Label</Text>
      <Text size='sm' color="secondary">Text in div</Text> */}

    </div>
  );
}

export default App;
