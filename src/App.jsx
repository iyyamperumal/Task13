import './App.css'
import Topbottom from './components/topbottom'
import Element from './components/elements'
import Picturedetail from './components/picturedetails'
import Review from './components/review'

function App() {
  //Top and Bottom datas
  const lookdata = [
    {
      type: "top",
      value: "Generate more leads with a professional landing page!",
    },
    {
      type: "bottom",
      value: "Ready to get started? Sign up now!"
    }
  ];
  //Elements datas
  const eledata = [
    {
      image: "https://img.icons8.com/?size=100&id=843&format=png&color=000000",
      name: "Fully Responsive",
      detail: "This theme will look great on any device, no matter the size!",
    },
    {
      image: "https://img.icons8.com/?size=100&id=57586&format=png&color=000000",
      name: "Bootstrap 5 Ready",
      detail: "Featuring the latest build of the new Bootstrap 5 framework!",
    },
    {
      image: "https://img.icons8.com/?size=100&id=1090&format=png&color=000000",
      name: "Easy to Use",
      detail: "Ready to use with your own content, or customize the source files!",
    }
  ];
  //Picture and details datas
  const picdata = [
    {
      id: "1",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
      name: "Fully Responsive Design",
      description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      id: "2",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
      name: "Updated For Bootstrap 5",
      description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
      id: "1",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
      name: "Easy to Use & Customize",
      description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
  ];
  //Reviews datas
  const reviewdata = [
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
      name: "Margaret E.",
      review: '"This is fantastic! Thanks so much guys!"',
    },
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
      name: "Fred S.",
      review: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
    },
    {
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
      name: "Sarah W.",
      review: '"Thanks so much for making these free resources available to us!"',
    },
  ];
  return (
    <>
      {/* page Top Components mapping and using */}
      {lookdata.map((data1) => {
        if (data1.type === "top") { return <Topbottom {...data1} value={data1.value} key={data1.type} />; }
      })};
      {/* Elements Component mapping and using */}
      <span className='element'>
        {eledata.map((data2) => {
          return <Element {...data2} key={data2.name} />
        })};
      </span>
      {/* Picture and details component mapping and using */}
      <span className='pic-detail'>
        {picdata.map((data3) => {
          return (<Picturedetail {...data3} key={data3.name} />)
        })};
      </span>
      {/* Review component mapping and using */}
      <span className='review'>
        <h1 className='main'>What people are saying...</h1>
        <span className='element'>
          {reviewdata.map((data4) => {
            return <Review {...data4} key={data4.image} />
          })};
        </span>
      </span>
      {/* Page Bottom components mapping and using */}
      {lookdata.map((data1) => {
        if (data1.type === "bottom") { return <Topbottom {...data1} value={data1.value} key={data1.type} />; }
      })};


    </>

  )
}

export default App
