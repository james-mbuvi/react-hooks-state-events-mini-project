import React,{useState} from "react";

function NewTaskForm({categories, handleAddNewTask}) {
const [details, setDetails] = useState("")
const [category, setCategory] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  let newTask = {text: details, category: category}
  handleAddNewTask(newTask)
}

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={e => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;




















