 

export default async function   Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")

  const d = await data.json() 
  
  return (
     <>
     <h1>home page</h1>
     <div>
      {d.map((item, index)=>(
        <h1 key={index}>{item.title}</h1>
      ))}
     </div>
     </>
  );
}
