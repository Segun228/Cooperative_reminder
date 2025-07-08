import React, { useEffect, useState } from "react"
import "./darkmodeSwitch.css"

const DarkmodeSwitch = () => {

    const [isDark, setIsDark] = useState(false)
    const handleChange = () => {
        setIsDark(!isDark)
    }

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                checked={isDark}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}

export default DarkmodeSwitch