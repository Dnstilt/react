import { useState, useEffect } from 'react';
import JobListing from './Joblisting.jsx'
import Spinner from './Spinner.jsx';


const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState( [  ] )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fechtJobs = async () => {
      try {
        const res = await fetch('https://locahost:8000/jobs')
        const data = await res.json()
        setJobs(data)
      } catch(error) {
        console.log('Error fecthing data', error)
      } finally {
        setLoading(false)
      }
      
    }
    fechtJobs()
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       { isHome ? 'Recent jobs' : 'Browse Jobs' }
      </h2>
      { loading ? (
          <Spinner loading={loading}/>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
          <JobListing key={job.id} job={ job }/>
          ))}
          </div>
          ) 
        }
    </div>
  </section>
  );
};

export default JobListings;