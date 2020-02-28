
Vue.component('dialog-box', {
    props: ['text'],
    template: `
            <div class="dialog-box">
                <div><span>{{ text }}</span></div>
                <div class="btn-group">
                    <button @click="$emit('approve')">Yes</button>
                    <button @click="$emit('cancel')">No</button>
                </div>
            </div>
          `
});
