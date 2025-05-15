import React from 'react'

const Map:React.FC = () => {
  return (
    <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
    <iframe
        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1747305895709!5m2!1sen!2sin!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHlvNlhZc1FF!2m2!1d31.3346994600472!2d75.57765035501234!3f345.61580375312326!4f9.425282951203641!5f0.4000000000000002"
       width={"100%"}
       height={500}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
  )
}

export default Map