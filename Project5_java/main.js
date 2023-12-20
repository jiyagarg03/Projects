var app = new Vue({
    el: '#app',
    data: {
        seasons: [
            {
                title: "Education",
                episodes:
                    [
                        {
                            title: "Stonks!",
                            when: "Septemeber 2018 - June 2021",
                            description: "Luigi is convinced that he is not very good in mathematics, so he chooses to study Business & management and not computer science. He obtains a bachelor degree in business & management at the University of Turin and becomes passionate about marketing.",
                            thumb: "https://picsum.photos/140/80"
                        },
                        {
                            title: "La riunione",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/81" 
                        }
                    ]
            },
            {
                title: "Employment History",
                episodes:
                    [
                        {
                            title: "Marco l'egiziano",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/82"
                        },
                        {
                            title: "Giangiangiangelo",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: "https://picsum.photos/140/83"
                        }
                    ]
            },
            {
                title: "Skills",
                episodes:
                    [
                        {
                            title: "Sara Croce",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: ""
                        },
                        {
                            title: "La riunione",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: ""
                        }
                    ]
            },
            {
                title: "Other Shit",
                episodes:
                    [
                        {
                            title: "Gossip",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: ""
                        },
                        {
                            title: "La riunione",
                            when: "2018 - 2019",
                            description: "Micheal si sente escluso quando il resto dell'ufficioo spettegola sugli stagisti. Nel frattempo, girano voci che mettono in dubbio l'eterosessualità di andy.",
                            thumb: ""
                        }
                    ]
            },
        ],
        appStatus : {
            currentSeason: 0,
            seasonSelectorShow: false
        }
    },
    methods: {
        toggleSeasonSelector(){
            this.appStatus.seasonSelectorShow =  !this.appStatus.seasonSelectorShow;
        },
        changeCurrentSeason(index){
            this.appStatus.currentSeason = index;
            setTimeout(()=>{
                this.appStatus.seasonSelectorShow =  !this.appStatus.seasonSelectorShow;
            },900);
        }
    },
})