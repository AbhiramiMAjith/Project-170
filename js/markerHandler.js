AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"

        var orderSummaryButton = document.getElementById("order-summary-button")
        var orderButton = document.getElementById("order-button")

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title : "Thanks for order!",
                text : "  ",
                buttons : false,
                timer : 2000
            })
        })

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon : "warning",
                title : "Order Summary",
                text : "Work in Progress"
            })
        })
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})