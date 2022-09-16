
### What was done

Just formatted and finished up the table, added a dialog to demonstrate what my target was for the initial timeframe.
Text of original readme below.

# MPTC Assessment

## Instructions

Clone repository.

yarn install.

touch/create .env , paste provided env vars into file and save.

run "yarn dev" to start dev server.


You can "log in" with the name: "Jennifer" and no password--make sure to check "staff" to ensure the correct table is queried. 

I continued after my timer went off, and did further work in another repository that will be linked here. 

## Where the time ran out:

I was finishing up the table on the staff dashboard. Got the application to a state where the basic flow was evident, linted and updated test. I had initially forgotten to copy my eslint and prettier config (which had thrown me off earlier, haha) so upon realizing why my checks didn't pass and remedying that issue, I broke my personal record for linting errors--242! It was fairly quick to resolve, but it was a great "Aha!" moment that explained *a lot* about why my IDE wasn't behaving as expected as I was racing the clock!

## Considerations and process:

I had initially sketched out a basic architecture that consisted of the client, a node server, and the database. On account of the time constraint, I omitted the server. With unlimited time, one node server could be built as a message-broker, sessions manager, and intermediary between the client and db--and additional servers built out to handle scheduling (such as with cal.com + chron) and emailing (with nodemailer). 

The table-based UI was the lowest-hanging fruit in regards to demonstrating basic functionality, and I legitimately thought I could hit MVP in two hours if I moved my fingers fast enough. The intention was to implement an "action required" badge on the StudentRow when the "step" that the student was on corresponded to the Staff user's Role--basically, the registrar would be prompted to approve or deny the application, and this action would require the Staff user to be a registrar. Every other action would be available to a Staff user with the role of Advisor. The idea was to only "flag" the field that represented the Student's place in the process, and to indicate whether or not it was the Staff user's responsibility to advance the process. Basically, a "the ball is in your court" indicator coupled with a way to advance the process--send email, approve or deny application/program selection, etc.


## Next steps:

MVP. Profit?

I would be excited about building out the backend architecture and making the UI much prettier and intuitive--the latter wouldn't take much work at all. I figure two hours would be enough to have the appearance of the app be pretty darn close to exceeding the quality of many college websites, with a decent additional time required to nail down the UX with error handling, pending UI, notifications and feedback, etc. 

It deeply saddens me that I had to avoid spending time on comments, but installing TypeDoc and generating documentation would be a logical next step. Additionally, using storybook for component documentation and writing vitest/jest tests would make a ton of sense!



## Commands

- `dev`: runs your application, consult terminal for localhost port.
- `build`: creates the production build version
- `preview`: starts a simple server with the build production code
- `test`: runs vitest in watch mode
- `test:coverage`: runs vitest returning coverage table
- `test:ci`: runs vitest once in CI
- `lint`: runs the linter in all components and pages
- `format`: runs prettier to format all components and pages
- `typecheck`: runs the type checker in all components and pages
- `storybook`: runs storybook on `localhost:6006`
- `storybook:build`: create the build version of storybook
- `generate`: runs plop to generate component files

---

