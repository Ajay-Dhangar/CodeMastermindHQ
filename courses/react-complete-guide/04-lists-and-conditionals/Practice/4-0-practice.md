---
id: 4-0-practice
title: 4.0 Practice
date: 2021-03-31 23:12:50
---

1. [Create an input field](4-1-create-input-field) (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that JavaScript strings are basically arrays!

## Dictation

It's time to practice, I think, to learn about outputting conditional content and lists. And here is your assignment, here are your tasks.

1. I first of all want you to create input field inside the root app component with a change listener with something output the length of the entered text below it (e.g. in a paragraph).
This is nothing new. This is simply what your learned does far already and about the listener using userInput, rendered it. You probably need state for this. There is nothing conditional or list it about this yet. Little change soon though.

2. In test number 2, I want you created new component (e.g. name it ValidationComponent) which receives text length as a prop. So the length of the text the user enters to you. Probably should store this length in the state too, you can get it with the length property executed on the entered text because keep in mind, JavaScript strings are basically arrays. So you can use array method on them.

3. In test number 3 I now all the want you to work inside the validation component. And not only receive that property, but either output “Text to short” or “Text long enough”, depending on the text length. And choose any kind of you want (e.g. take 5 as a minimum length) but that's up to you. You won't need to manage the state this validation component for that. You'll get the text length as prop. And now is up to you the conditionally rendered one of these two texts. For example, in a paragraph inside validation component.

4. In test number 4, I then want you to create another component (the CharComponent, for example) and style it as an inline box. Here is some example style you can use.

5. I then want you to render a list of this CharComponents and to ship you want CharComponents per character the user entered. Again text is just basically an array. And I want you to pass this character as a prop. So the basically you display that text as a couple of boxes. The box of course as of the next with each other in the end still born the word that the user entered. Make sure the rendered this list of CharComponents simply in the App component. Not inside the ValidationComponent though worse would be free to do that too. But as component this fine.

6. When you then click a CharComponent I want you to remove char after click component from the entered text. So you're probably managing the user input in state anyways, and you then need to update the state for the given position remove it. This of course will also affect to text in the input field if you set up two a binding which are recommended.

And the basically practices what you learned on the last lectures, executing code depending on which element something happens on. You learn all of that might sound complicated. Feel free to go back to the previous lectures if something is unclear. That let the tried on your own. And feel free to then follow long with me as I will show you my solution in the solution video.

Now before you dived the assignments, here is one important note without which you probably won't be able to complete test 5 and 6.

In the hint are raid the JavaScript strings are basically arrays. This is only kind of true. There are no arrays. There are kind of arrays characters, but not all array methods are available on strings. For example `map`. Won't be available. `Splice`. Won't be available. You need these two methods for the tasks 5 and 6 so. What you can do and what you should do is you can core word a string into a real array of text, by calling `split`. The split method on your text a passing an empty string as argument to it. So if t input by user for example stored in a userInput property, userInput.split with parenthesis (and in the parenthesis just an empty string) will split into an array of characters. And you can call map on after them. And the same for the splicing. You can get splice something on such a convert of array and then will join add an empty string as an input, you can turn it back into the text. This will be important for task 6. For this is an extra challenge, some extra hint adjustment pass to you, you can also find hint in the description of the assignment here self down there downloads video I also listed is two method how to use them.

With that a chore assignment that the try for inside your own and you can always camere your solution to mine in the solution video.
