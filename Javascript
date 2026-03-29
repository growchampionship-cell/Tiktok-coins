// Example Frontend Listener
socket.on('payment_success', (data) => {
    this.showSuccess = true;
    this.newBalance = data.updatedBalance;
    // Trigger the animation you saw in the blueprint
});
