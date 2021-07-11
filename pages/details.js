import styles from '../styles/Details.module.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router'


const formSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required(),
  phoneNo: yup.number().min(10).required(),
  address: yup.string().required().min(10)
})


const Details = () => {

  const router = useRouter();
  const { query } = router;
  let data = {}

  return ( 
    <div className={styles.container}>
      <div className="info">
        <div className={styles.left}>
          <h1>Tell us Some Important Details about you</h1>
          <button className='button' onClick={ () => router.back()}>Go Back</button>
        </div>
      </div>
      <Formik
        initialValues={{name: '', email: '', phoneNo: '', address: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => {
          data = {...values,quantity: query.qty}
          router.push('/thanks')
        }}
      >
        {(props) => (
          <form className={styles.form}>
            <input placeholder="Name" className={styles.input} type="name"  onChange={props.handleChange('name')} value={props.values.name} onBlur={props.handleBlur('name')}/>
            <p className={styles.error}>{props.touched.name && props.errors.name}</p>
            <input placeholder="Email" className={styles.input} type="email"  onChange={props.handleChange('email')} value={props.values.email} onBlur={props.handleBlur('email')}/>
            <p className={styles.error}>{props.touched.email && props.errors.email}</p>
            <input placeholder="Phone Number" className={styles.input} type="phoneNo"  onChange={props.handleChange('phoneNo')} value={props.values.phoneNo} onBlur={props.handleBlur('phoneNo')}/>
            <p className={styles.error}>{props.touched.phoneNo && props.errors.phoneNo}</p>
            <input placeholder="Address" className={styles.input} type="address"  onChange={props.handleChange('address')} value={props.values.address} onBlur={props.handleBlur('address')}/>
            <p className={styles.error}>{props.touched.address && props.errors.address}</p>
            <button type="submit" className='button' onClick={props.handleSubmit}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
   );
}
 
export default Details;