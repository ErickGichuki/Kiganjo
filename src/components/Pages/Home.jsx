import React from 'react'

function Home() {
  return (
    <div className='home-container'>
      <h2 className='church-title'>SDA KIGANJO CHURCH</h2>
      <p className='welcome-message'>Welcome to our church all the time, we love visitors</p>
      <section className='programmes-section'>
        <h3 className='section-title'>Our Programmes</h3>

        <div className='programme' id='fellowship'>
          <h4 style={{textAlign:'center'}}>Weekly Fellowship</h4>
          <p>We meet every Thursday from 8am - 9am for fellowship.</p>
        </div>
        <div className='programme' id='sabbath'>
          <div id='sabbathintro'>
          <h4 style={{textAlign:'center'}}>Sabbath</h4>
          <p>Welcome to the Sabbath day the holy day the Lord sanctified.</p>
          <img style={{width:'100%',height:'100%'}} src='https://media.istockphoto.com/id/2140655169/photo/remember-the-sabbath-day-handwritten-note-with-holy-bible-antique-key-and-flowers-on-wooden.webp?b=1&s=170667a&w=0&k=20&c=cSIOY6yOwsR0OIEuJ2vZYrxgXYdjoA31LzANBkKPVTs=' alt='shabat' />
          </div>
          <div className='sub-programme' id='devotion'>
            <h4>Morning Devotion</h4>
            <p>Our Morning Devotion starts at 8:30am - 8:50am</p>
            <img style={{width:'450px',height:'300px',borderRadius:'5px'}} src='https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww' alt='dev'/>
          </div>
          <div className='sub-programme' id='sch'>
            <h4>Sabbath School</h4>
            <p>The program starts at 9am where we praise the Lord through an opening hymn, prayers, listen to the world quarterly mission how the gospel is being proclimed in different ways across the globe.</p>
          </div>
          <div className='sub-programme'>
            <h4>Lesson Discussion</h4>
            <p>This quarter we are studying the Great Controversy, join us during our discussion we study line by line.</p>
          </div>
        </div>
      </section>
      <section>
        <div id='divine'>
          <h3>Divine Hour</h3>
          <p>We praise God through prayers, songs, tithes and offerings and finally we listen the message from Heaven via His Servant.</p>
        </div>
      </section>

      <section id='links-section'>
        <h3 className='section-title'>Useful Links</h3>
        <div id='lessonlinks'>
        <p><a id='english-version' href='https://www.sabbath.school/' target='_blank'>English Lesson</a></p>
        <p><a id='swahili' href='https://www.fustero.es/index_sw.php' target='_blank'>Swahili Lesson</a></p>
        <p><a id='kikuyu' href='https://www.fustero.es/index_kik.php' target='_blank'>Kikuyu Lesson</a></p>
        <p><a href='https://am.adventistmission.org/mq-adult' target='_blank'>Mission Quarter</a></p>
        </div>
      </section>
    </div>
  )
}

export default Home
