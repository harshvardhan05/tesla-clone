import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
    return (
        <Container >
            <Section
                title = "Model S"            
                description = "Order Online For Touchless Delivery"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
                backgroundImage = "model-s.jpg"
             />
            <Section
                title = "Model Y"            
                description = "Order Online For Touchless Delivery"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
                backgroundImage = "model-y.jpg"
             />
            <Section
                title = "Model 3"            
                description = "Order Online For Touchless Delivery"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
                backgroundImage = "model-3.jpg"
             />
            <Section
                title = "Model X"            
                description = "Order Online For Touchless Delivery"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Inventory"
                backgroundImage = "model-x.jpg"
             />
            <Section
                title = "Lower Cost Solar Panels in America"            
                description = "Money-back Guarantee"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
                backgroundImage = "solar-panel.jpg"
             />
            <Section
                title = "Solar for New Roofs"            
                description = "Solar Roof Costs Less Than a New Roof"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
                backgroundImage = "solar-roof.jpg"
             />
            <Section
                title = "Accessories" 
                description = ""           
                leftBtnText = "Shop Now"
                backgroundImage = "accessories.jpg"
             />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
