const oppoStatus = [
    {
        K_OPPO_STATUS: 1,
        STATUS: "1. Initial Contact",
        SUCCESS: 0,
    },
    {
        K_OPPO_STATUS: 2,
        STATUS: "2. Demonstration",
        SUCCESS: 25,
    },
    {
        K_OPPO_STATUS: 3,
        STATUS: "3. Proposal",
        SUCCESS: 50,
    },
    {
        K_OPPO_STATUS: 4,
        STATUS: "4. Negotiation",
        SUCCESS: 75,
    },
    {
        K_OPPO_STATUS: 5,
        STATUS: "5. Order",
        SUCCESS: 100,
    },
];

class FormComponent {
    constructor() {
        this.chosenOption = oppoStatus[0];
    }

    generateStatusSelect(statusSelect) {
        statusSelect.innerHTML = oppoStatus.map(oppo => `<option>${oppo.STATUS}</option>`).join('');
    }

    getCurrentSuccess() {
        return this.chosenOption.SUCCESS;
    }

    updateSelectedOption(index) {
        this.chosenOption = oppoStatus[index];
        //PS: i believe that this input should be disabled from editing on the HTML
        const successInput = document.querySelector('input[name="success"]');
        successInput.value = this.chosenOption.SUCCESS;
    }

    getOutput(obj) {
        return {
            status: obj.STATUS,
            success: obj.SUCCESS,
        };
    }

    onSubmit() {
        const output = document.querySelector('.output');
        output.innerText = JSON.stringify(this.getOutput(this.chosenOption), 1);
    }

    start() {
        const statusSelect = document.querySelector('select[name="status"]');
        this.generateStatusSelect(statusSelect);
        const form = document.querySelector('form button[type="submit"]');

        statusSelect.addEventListener("change", () => {
            this.updateSelectedOption(statusSelect.selectedIndex);
        });

        form.addEventListener("click", (event) => {
            event.preventDefault();
            this.onSubmit();
        });
    }
}

const fc = new FormComponent();
fc.start();