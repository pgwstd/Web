//混入
export const Pop = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('混入的钩子函数')
    }
}