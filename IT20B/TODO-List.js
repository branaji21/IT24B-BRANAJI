
package todolist;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class TODOlist {


    private List<Task> tasks;
    private Stack<Action> history;
g
    public TODOlist() {
        tasks = new ArrayList<>();
        history = new Stack<>();
    }

    public static void main(String[] args) {
        TODOlist manager = new TODOlist();
        manager.run();
    }

    private void run() {
        while (true) {
            String menu = "--- To-Do List Manager ---\n"
                    + "1. Add Task\n"
                    + "2. Mark Task as Done\n"
                    + "3. Undo Last Action\n"
                    + "4. View Tasks\n"
                    + "5. Exit";
            String choiceString = JOptionPane.showInputDialog(menu);

            try {
                int choice = Integer.parseInt(choiceString);

                switch (choice) {
                    case 1:
                        addTask();
                        break;
                    case 2:
                        markTaskAsDone();
                        break;
                    case 3:
                        undoLastAction();
                        break;
                    case 4:
                        viewTasks();
                        break;
                    case 5:
                        JOptionPane.showMessageDialog(null, "Exiting...");
                        return;
                    default:
                        JOptionPane.showMessageDialog(null, "Invalid option! Please try again.");
                }
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Invalid input! Please enter a valid number.");
            }
        }
    }

    private void addTask() {
        String description = JOptionPane.showInputDialog("Enter the task description:");
        if (description  != null && !description.trim().isEmpty()) {
            Task newTask = new Task(description);
            tasks.add(newTask);
            history.push(new Action(Action.Type.ADD, newTask));
            JOptionPane.showMessageDialog(null, "Task added: " + description);
        } else {
            JOptionPane.showMessageDialog(null, "Task description cannot be empty.");
        }
    }

    private void markTaskAsDone() {
        StringBuilder taskList = new StringBuilder();
        for (int i = 0; i < tasks.size(); i++) {
            taskList.append(i + 1).append(". ").append(tasks.get(i)).append("\n");
        }

        String taskChoiceString = JOptionPane.showInputDialog("Select a task to mark as done:\n" + taskList.toString());

        try {
            int taskIndex = Integer.parseInt(taskChoiceString) - 1;
            if (taskIndex >= 0 && taskIndex < tasks.size()) {
                Task taskToMark = tasks.get(taskIndex);
                taskToMark.setDone(true);
                history.push(new Action(Action.Type.MARK_DONE, taskToMark));
                JOptionPane.showMessageDialog(null, "Task marked as done: " + taskToMark.getDescription());
            } else {
                JOptionPane.showMessageDialog(null, "Invalid task number.");
            }
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Invalid input! Please enter a valid task number.");
        }
    }

    private void undoLastAction() {
        if (history.isEmpty()) {
            JOptionPane.showMessageDialog(null, "No actions to undo.");
            return;
        }

        Action jude = history.pop();
        switch (jude.getType()) {
            case ADD:
                tasks.remove(jude.getTask());
                JOptionPane.showMessageDialog(null, "Undone adding task: " + jude.getTask().getDescription());
                break;
            case MARK_DONE:
                jude.getTask().setDone(false);
                JOptionPane.showMessageDialog(null, "Undone marking task as done: " + jude.getTask().getDescription());
                break;
        }
    }

    private void viewTasks() {
        if (tasks.isEmpty()) {
            JOptionPane.showMessageDialog(null, "No tasks in the list.");
            return;
        }

        StringBuilder taskList = new StringBuilder("Your Tasks:\n");
        for (int i = 0; i < tasks.size(); i++) {
            taskList.append(i + 1).append(". ").append(tasks.get(i)).append("\n");
        }

        JOptionPane.showMessageDialog(null, taskList.toString());
    }
           
    static class Task {
        private String description;
        private boolean isDone;

        public Task(String description) {
            this.description = description;
            this.isDone = false;
        }

        public String getDescription() {
            return description;
        }

        public void setDone(boolean done) {
            isDone = done;
        }

        @Override
        public String toString() {
            return description + (isDone ? " (Done)" : "");
        }
    }
    
    static class Action {
        enum Type {
            ADD,
            MARK_DONE
        }

        private Type type;
        private Task task;

        public Action(Type type, Task task) {
            this.type = type;
            this.task = task;
        }

        public Type getType() {
            return type;
        }

        public Task getTask() {
            return task;
        }
    }
}

    
    

