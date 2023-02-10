import React, { PureComponent } from 'react'
import style from './style.module.css'

class MyPureComponent extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const { a, b } = this.props
    console.log(a, b)
    return (
      <div className={style.profileCard}>
        <div className={style.profileImg}>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
            }
          />
        </div>
        <h4>Umar P</h4>
        <p>I am a software developer</p>
        <div className='profile-card-footer'>
          <button>CALL</button>
        </div>
      </div>
    )
  }
}

export default MyPureComponent
