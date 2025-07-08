import Select from 'react-select'


const Accordeon = ({ options, value, onChange }) => (
    <Select 
        options={options} 
        value={value}
        onChange={onChange}
        styles={{
                control: (baseStyles, state) => ({
                ...baseStyles,
                width:"30vw",
                height:"8vh",
                borderRadius:"calc(0.9*var(--index))",
                backgroundColor:"#e7e7e7",
                position:"relative",
                zIndex:"3",
                paddingLeft:"calc(1*var(--index))",
                border:"none"
            }),
            menu: (base) => ({
                ...base,
                zIndex: 9999,
                position: "absolute",
            }),
        }}
    />
)

export default Accordeon