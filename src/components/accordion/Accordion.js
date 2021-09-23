import SingleAccordion from './SingleAccordion';

const Accordion = () => {
    const data = [
        { id: 1, title: "A", text: "aaa" },
        { id: 2, title: "B", text: "bbb" },
        { id: 3, title: "C", text: "ccc" },
    ]

    return (
        <div>
            {data.map(({ title, text }) =>
                <SingleAccordion title={title} text={text} />
            )}
        </div>
    )
}

export default Accordion;