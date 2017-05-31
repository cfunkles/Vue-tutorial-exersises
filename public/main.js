var mainAppVm = new Vue({
    // what DOM element is this vm attached to?
    el : '#app',
    data : {
        firstName : '',
        lastName : '',
        testHtml: '<b>this is html</b>',
        pTitle: 'dynamic paragraph title!',
        friends: [
            {
                firstName: 'Jeph',
                friendliness: 8,
                online: true
            },
            {
                firstName : 'Alice',
                friendliness: 11,
                online: false
            },
            {
                firstName : 'Mallory',
                friendliness : 3,
                online: true
            }
        ],
        messageLog: [],
    },

    computed : {
        //inside the constructor, we can refer to the vm as `this`
        fullName : function(){
            return this.firstName + ' ' + this.lastName
        },
        fnTitleCased : function(){
            return this.firstName.length > 0 && this.firstName[0].toUpperCase() == this.firstName[0];
        },
        lnTitleCased : function(){
            return this.lastName.length > 0 && this.lastName[0].toUpperCase() == this.lastName[0];
        },
        fullNameTitleCased: function(){
            return this.fnTitleCased && this.lnTitleCased;
        }
    },
    methods : {
        friendInfo : function(friend, $event){
            console.log(`
            You've been friends with ${friend.firstName} for ${friend.friendliness} years.
            `)
            this.messageLog.push(`
            You've been friends with ${friend.firstName} for ${friend.friendliness} years.
            `)
            console.log($event)
        },
        rotateNames: function(){
            var fnArray = this.firstName.split('')
            var lnArray = this.lastName.split('')
            fnArray.unshift(fnArray.pop())
            lnArray.unshift(lnArray.pop())
            this.firstName = fnArray.join('')
            this.lastName = lnArray.join('')
        },
    }
});