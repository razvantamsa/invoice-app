#!/usr/bin/env bash

CWD=$( cd "$( dirname "${BASH_SOURCE[0]}" )/" && pwd )
cd ${CWD}

BACKEND_APP_CONTAINER="inv_app_backend"

HELP_COMMANDS="
    I am your development wizard (0_0)
    Your commands are:

    -------------------------
    start               # start docker containers
    stop                # stop docker containers
    migrate <name>      # run prisma migration
    seed                # fill database with entries

    help                # list available commands
    ------------------------- 
"

#
# Generic help function
#
function printHelp {
    echo -e "${HELP_COMMANDS}"
}

if [[ $# == 0 ]]; then
    printHelp
    exit 0
fi

while [[ $# -gt 0 ]]; do
    case "${1}" in
        start)
            docker compose --env-file /dev/null up "${@:2}"
            exit 0
        ;;
        stop)
            docker compose --env-file /dev/null down "${@:2}"
            exit 0
        ;;
        migrate)
            if [ -z "${2}" ]; then
                echo "Migration name is missing."
                exit 1
            fi
            docker exec -it ${BACKEND_APP_CONTAINER} npx prisma migrate dev --name "${2}"
            exit 0
        ;;
        seed)
            docker exec -it ${BACKEND_APP_CONTAINER} npx ts-node seeding.script.ts
            exit 0
        ;;
        *)
            echo "Unknown parameter: ${1}"
            printHelp
            exit 1
        ;;
    esac

    shift
done