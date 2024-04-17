document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll("#home p");
    let index = 0;

    // Function to show the next paragraph and hide the previous one
    function showNextParagraph() {
        const currentParagraph = paragraphs[index];
        const nextIndex = (index + 1) % paragraphs.length;
        const nextParagraph = paragraphs[nextIndex];

        currentParagraph.classList.remove("active");
        nextParagraph.classList.add("active");

        index = nextIndex;
    }

    // Initially show the first paragraph
    paragraphs[index].classList.add("active");

    // Show each paragraph one by one
    setInterval(showNextParagraph, 5000); // Adjust the interval time (in milliseconds) as needed
});


function send() {
    alert("Success..")

}
