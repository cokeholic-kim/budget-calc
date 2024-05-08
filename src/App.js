import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Lists from './components/Lists';
import { useEffect, useState } from 'react';
import Notice from './components/Notice';

const data = [
  {
    id:1,
    title: '식비',
    cost: 10000,
  },
  {
    id:2,
    title: '교통비',
    cost: 20000,
  },
  {
    id:3,
    title: '의료비',
    cost: 30000,
  }
]

function App() {
  console.log('app');

  const [budget,setBudget] = useState(data)
  const [form,setform] = useState({
    title:'',
    cost:0
  });
  const [useEdit,setUseEdit] = useState({
    state:false,
    editId:0,
  });
  const [DataCRUD,setDataCRUD] = useState("")

  useEffect(() => {
    if (DataCRUD) {
      // DataCRUD가 변경될 때마다 Notice를 마운트하고 2초 후에 언마운트합니다.
      const timer = setTimeout(() => {
        setDataCRUD('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [DataCRUD]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(useEdit.state){
      let newBudget = budget.map(item => {
        if(item.id === useEdit.editId){
          return {...item,title:form.title,cost:form.cost}
        }else{
          return item;
        }
      });
      setBudget(newBudget);
      setUseEdit({state:false,editId:0});
      setDataCRUD("U");
    }else{
      setBudget([...budget,{...form,id:budget.length+1}]);
      setDataCRUD("C");
    }
    setform({
      title:'',
      cost:0
    });
  }

  const handleOnDelete = (id) => {
    let newBudget = budget.filter(item => item.id !== id);
    console.log(newBudget);
    setBudget(newBudget);
    setDataCRUD("D");
  }

  const onClickEdit = (budgetId) => {
    let {id,title,cost} = budget.find(item => item.id === budgetId)
    setform({title:title,cost:cost});
    setUseEdit({state:true,editId:id});
  }

  return (
    <div>
      <Notice DataCRUD={DataCRUD}/>
      <h1 className='text-3xl font-bold my-3'>예산 계산기</h1>  
      <div className=' justify-center bg-white p-5'>
        <Form form={form} setform={setform} handleSubmit={handleSubmit}/>
        <Lists budget={budget} handleOnDelete={handleOnDelete} onClickEdit={onClickEdit}/>
        <button className='p-2 bg-green-600  text-white rounded hover:bg-green-400 font-bold my-4' onClick={()=>setBudget([])}> 목록 지우기 ❌</button>
      </div>
    </div>
  );
}

export default App;
