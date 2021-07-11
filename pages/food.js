import { useRouter } from 'next/router';
import styles from '../styles/Food.module.css';


const options = [{id: 1, qty: '4Kgs',abt: 'Household food'}, {id: 2,qty: '7Kgs',abt: 'Family Function leftover'},
  {id: 3, qty: '10Kgs',abt: 'Party Food'}, {id: 4, qty: '>11Kgs',abt: 'Grand Party Food'}]

const Food = () => {

  const router = useRouter();

  const onClickHandler = () => {
    router.push('/')
  }

  return ( 
    <div className={styles.container}>
      <div className="info">
        <h1>How much food do you want to donate</h1>
        <p>Select appropriate amount of food.</p>
      </div>
      <div className={styles.right}>
          
          {options.map((option)=>(
            <button key={option.id} onClick={onClickHandler} className={styles.options}> 
              <h1>{option.qty}</h1>
              <p>{option.abt}</p>
            </button>
          ))}
      </div>
    </div>
   );
}
 
export default Food;