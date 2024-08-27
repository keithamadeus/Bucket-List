import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // Write logic to call the editBucketItem prop with the supplied values
    // Hint: You will need to pass in the edit.id, value, and eagerness
    props.editBucketItem(edit.id, value, edit.eagerness);

    // Set the key:value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    //  Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    //  Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div lassName={`bucket-row ${item.eagerness} ${item.completed ? 'complete' : ''}`} key={index}>

      {/*  Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div key={index} onClick={() => props.completeBucketItem(item.id)}>
          {/*  Add the item text here */}
          {item.text}
      </div>
      <div className="icons">
        {/*  Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        {/*  Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
