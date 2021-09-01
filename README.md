# Quabbin

## Building the Docker image
You must either build a docker image or import one before you can create containers.

1. Open a terminal and change directories to /website
2. Run the following command.  Note the . at the end of the command. ```docker build -t {tag name} .```
    * Example: ```docker build -t quabbin .```

## Exporting the Docker image
If you build a docker image and want to transfer it to another machine you can export it to a file.  This makes deployment easier because you do not need to download and compile the source code on the production servers.

1. Follow the instructions to build the docker image
2. Save the image to a .tar file ```docker save -o {filename} {image name}```
    * Example: ```docker save -o quabbin.tar quabbin```
3. Now you can transfer the tar file to another docker host and import it instead of building a new image

## Importing the Docker image
1. Follow the instructions to export a docker image
2. Make sure docker is installed on the machine where you want to run the image
3. Copy the image to the new server
4. Import the image ```docker load -i {path to tar file}```