

export const Block = props => {


    if (!props.state.faves) {
        props.state.faves = []
    }

    return <c-x style={{
        width: 150, height: 300, flex: 1, minWidth: 150,
        position: "relative",boxShadow :" 14px 31px 66px -22px rgba(219,27,219,1)"
    }}>


        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width: 150, height: 200, objectFit: "fill", flex: 1, minWidth: 150, borderLeft: 5, borderTopRightRadius: 5 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()

            }} />
        <f-cc style={{ width: "100%" }}>

            <f-13>{props.book.title}</f-13>
        </f-cc>
        <img src="https://img.icons8.com/?size=100&id=o4V4IXgZasg6&format=png&color=000000" style={{ width: 30, height: 30, objectFit: "contain",borderRadius:5}}/>
        <f-csb style={{ width: "100%"}}></f-csb>
        <c-cc>
            <f-13b>

                {props.book.price}

            </f-13b>
            <f-13b>

                <del>{1.2 * props.book.price}</del>

            </f-13b>
        </c-cc>

        {props.state.faves.includes(props.book.title) ?
            <img src="https://irmapserver.ir/research/0/heart.png"
                style={{
                    height: 30, width: 30, objectFit: "contain",
                    position: "absolute", bottom: 10, right: 10
                }} /> : null}

    </c-x>
}

