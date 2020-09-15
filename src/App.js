import React from 'react'
import TopBar from './components/TopBar.js'
import BottomBar from './components/BottomBar.js'
import StoriesBar from './components/StoriesBar.js'
import Feed from './components/Feed.js'
import './App.css'


class App extends React.Component {
    state = {
        stories: [
            {id: 1, user: {avatar: require(`./images/s1.jpg`)}},
            {id: 2, user: {avatar: require(`./images/s2.jpg`)}},
            {id: 3, user: {avatar: require(`./images/s3.jpg`)}},
            {id: 4, user: {avatar: require(`./images/s4.jpg`)}},
            {id: 5, user: {avatar: require(`./images/s5.jpg`)}},
            {id: 6, user: {avatar: require(`./images/s6.jpg`)}, watched: true},
            {id: 7, user: {avatar: require(`./images/s7.jpg`)}, watched: true},
            {id: 8, user: {avatar: require(`./images/s8.jpg`)}, watched: true}
        ],
        feed: [
            {photo: {url: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/119188293_397651177887100_1888076194089133186_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=JYjH58gxCoAAX-WzC0t&oh=e8e2a41f8bab68f86123d984b106cd11&oe=5F882CFF', likes: 68, comments: 17}, user: {avatar: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/75443193_2452299771547351_4432382021561483264_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=sp0xP7FBLYUAX9FP3kB&oh=5c62462b06ccf6e7d2f4ff022148df5a&oe=5F87A3CB', username: 'deborabrosa'}, liked: false, saved: false},
            {photo: {url: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/119236568_2952774934828451_1777650320491926749_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=tzxeKC4BzZoAX9pIQSi&oh=27c049a354b86c86ac0905f070d509f9&oe=5F8A6892', likes: 77, comments: 2}, user: {avatar: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/75443193_2452299771547351_4432382021561483264_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=sp0xP7FBLYUAX9FP3kB&oh=5c62462b06ccf6e7d2f4ff022148df5a&oe=5F87A3CB', username: 'deborabrosa'}, liked: false, saved: false},
            {photo: {url: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/119220211_755433981965726_2776012922755050775_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=vYhMxxwLuPUAX-Uh5cW&oh=e4be7da80bd999e8b2c04f0eaaf5df47&oe=5F879389', likes: 101, comments: 19}, user: {avatar: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/118878825_3210194709097077_5552171098587765943_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=NUX_filDjEoAX_wTMLx&oh=b0f8ebca963a72578e16d1903c1b4157&oe=5F88A0F1', username: 'by_lena._'}, liked: false, saved: false},
            //{photo: {url: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/e35/119216784_2687843768103412_885746214490408832_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=FX2jTccNapUAX8ZwFgo&oh=f0ef1e8639704b819abd794a976240d0&oe=5F869D04', likes: 13, comments: 9}, user: {avatar: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/58033350_2313235138934698_1009289384387674112_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=hV5HVpkj4YsAX8_4ic8&oh=70cbee27839d8df8ef7de2182fb80b7e&oe=5F86A124', username: 'sebzanella'}, liked: false, saved: false},
            //{photo: {url: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/118824392_349197719784805_2329701482887197694_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=vjy-VIiID7IAX9sPWIx&oh=d5200483111b026b0fbefe328a0e1be3&oe=5F7DAC9A', likes: 132, comments: 34}, user: {avatar: 'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/12798160_1000166996717993_1957926717_a.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=k8dyVF0CrdkAX8g5SWZ&oh=256b6506c1b2d0a95993a454e661b03d&oe=5F7DA266', username: 'voodoolx'}, liked: false, saved: false},
        ]
    }
    
    componentDidMount = () => {

    }

    render = () => {
        return (
            <div className="app">
                <TopBar/>
                <StoriesBar stories={this.state.stories}/>
                <Feed feed={this.state.feed}/>
                <BottomBar/>
            </div>
        )
    }
}

export default App
