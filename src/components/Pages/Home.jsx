import React from 'react'

function Home() {
  return (
    <div className='home-container'>
      <h2 className='church-title'>SDA KIGANJO CHURCH</h2>
      <p style={{color:'blue'}} className='welcome-message'>Are you looking for a church? Welcome to our church, we love visitors</p>
      <div>
        <img style={{borderRadius:'10px'}} src="https://media.istockphoto.com/id/183778654/photo/singing-hymns.webp?b=1&s=170667a&w=0&k=20&c=2oBCmRwKz1BZx9I-4X7E8eO5UsDrY_PDqrxt-RzKmas=" alt="introimg" />
      </div>
      <section className='programmes-section'>
        <h3 className='section-title'>Our Programmes</h3>

        <div className='programme' id='fellowship'>
          <h4 style={{textAlign:'center'}}>Weekly Fellowship</h4>
          <p>We meet every Thursday from 8am - 9am for fellowship.</p>
          <img src='https://media.istockphoto.com/id/476872230/photo/bible-study.webp?b=1&s=170667a&w=0&k=20&c=_y7wDVstpdw9thIaZ_vPTypGr4mkUfdjZiKt7zAp2Rs=' alt='fellowship'/>
        </div>
        <div className='programme' id='sabbath'>
          <div id='sabbathintro'>
          <h4 style={{textAlign:'center'}}>Sabbath</h4>
          <p>Welcome to the Sabbath day the holy day that the Lord sanctified.</p>
          <p>And hallow my sabbaths; and they shall be a sign between me and you, that ye may know that I am the LORD your God<a href='#'>(Ezekiel 20:12)</a> </p>
          <img style={{width:'450px',height:'300px',borderRadius:'10px'}} src='https://media.istockphoto.com/id/2140655169/photo/remember-the-sabbath-day-handwritten-note-with-holy-bible-antique-key-and-flowers-on-wooden.webp?b=1&s=170667a&w=0&k=20&c=cSIOY6yOwsR0OIEuJ2vZYrxgXYdjoA31LzANBkKPVTs=' alt='shabat' />
          </div>
          <div className='sub-programme' id='devotion'>
            <h4 style={{textAlign:'center',padding:'10px'}}>Morning Devotion</h4>
            <p>Our Morning Devotion starts at 8:30am - 8:50am</p>
            <img style={{width:'480px',height:'300px',borderRadius:'5px'}} src='https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNofGVufDB8fDB8fHww' alt='dev'/>
          </div>
          <div className='sub-programme' id='sch'>
            <h4 style={{textAlign:'center',padding:'10px'}}>Sabbath School</h4>
            <p>The program starts at 9am where we praise the Lord through an opening hymn, prayers, listen to the world quarterly mission how the gospel is being proclimed in different ways across the globe.</p>
            <img style={{width:'490px',borderRadius:'10px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_6nqiYz347aM3axbV9if8U__vBbna9nSiA&usqp=CAU' alt='mission'/>
          </div>
          <div className='sub-programme'>
            <h4 style={{textAlign:'center',padding:'10px'}}>Lesson Discussion</h4>
            <p>This quarter we are studying the Great Controversy, join us during our discussion we study precept upon precept, a little here and a little there, line by line in order to search the scriptura</p>
            <img style={{borderRadius:'10px'}} src="" alt="lesson" />
          </div>
        </div>
      </section>
      <section>
        <div id='divine'>
          <h3>Divine Hour</h3>
          <p>We praise God through prayers, songs, tithes and offerings and be filled with the bread of heaven.</p>
          <img style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/471051687/photo/i-am-the-bread-bible-scripture-with-wheat.webp?b=1&s=170667a&w=0&k=20&c=6jgF8DQniCXSH-206qaYF6Ub971XWsAMmXRAEDDd2ug=" alt="bread of heaven" />
        </div>
      </section>

      <section id='links-section'>
        <h3 style={{color:'blue'}} className='section-title'>Useful Links</h3>
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
