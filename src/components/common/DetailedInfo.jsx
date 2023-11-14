export default function DetailedInfo(props) {
    return (
        <>
        <div className={props.className}>
            <img src="https://images.pexels.com/photos/106111/pexels-photo-106111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h4>{props.title}</h4>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
                <p>Sed euismod libero auctor metus congue, a finibus nisi cursus.</p> 
                Nullam et ultricies ex. Nunc eget nunc ac arcu feugiat bibendum. 
            </section>
        </div>
        </>
    )
}