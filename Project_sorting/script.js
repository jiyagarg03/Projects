function startSorting() {
    const inputArray = document.getElementById('inputArray').value;
    const array = inputArray.split(',').map(Number);
    
    const sortingAlgorithms = [bubbleSort, selectionSort, insertionSort, quickSort];

    sortingAlgorithms.forEach((algorithm, index) => {
        const visualizationDiv = document.getElementById(algorithm.name);
        const algorithmSteps = algorithm(array.slice());

        visualizeSorting(visualizationDiv, algorithmSteps, index + 1);
    });
}

function visualizeSorting(visualizationDiv, algorithmSteps, index) {
    const steps = algorithmSteps.steps;

    steps.forEach((step, i) => {
        const stepDiv = document.createElement('div');
        stepDiv.innerHTML = `<p>Step ${i + 1}</p>
                             <p>Current Array: ${step.currentArray.join(',')}</p>
                             <p>Action: ${step.action}</p>
                             <p>Result: ${step.result.join(',')}</p>`;

        visualizationDiv.appendChild(stepDiv);
    });

    const finalStepDiv = document.createElement('div');
    finalStepDiv.innerHTML = `<p>Final Sorted Array: ${steps[steps.length - 1].result.join(',')}</p>`;
    visualizationDiv.appendChild(finalStepDiv);
}
function bubbleSort(array) {
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                steps.push({
                    action: `Swap ${array[j]}<i class="fa-solid fa-arrow-right-arrow-left"></i>${array[j + 1]}`,
                    result: array.slice(),
                    currentArray: array.slice(),
                });
            }
        }
    }

    return { algorithmName: 'Bubble Sort', steps };
}

function selectionSort(array) {
    const steps = [];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        steps.push({
            action: `Swap ${array[i]} <i class="fa-solid fa-arrow-right-arrow-left"></i>${array[minIndex]}`,
            result: array.slice(),
            currentArray: array.slice(),
        });
    }

    return { algorithmName: 'Selection Sort', steps };
}

function insertionSort(array) {
    const steps = [];
    const n = array.length;

    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
        steps.push({
            action: `Insert ${key}`,
            result: array.slice(),
            currentArray: array.slice(),
        });
    }

    return { algorithmName: 'Insertion Sort', steps };
}

function quickSort(array) {
    const steps = [];
    
    function partition(low, high) {
        const pivot = array[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                steps.push({
                    action: `Swap ${array[i]} <i class="fa-solid fa-arrow-right-arrow-left"></i>${array[j]}`,
                    result: array.slice(),
                    currentArray: array.slice(),
                });
            }
        }
        const temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        steps.push({
            action: `Swap ${array[i + 1]} <i class="fa-solid fa-arrow-right-arrow-left"></i>${array[high]}`,
            result: array.slice(),
            currentArray: array.slice(),
        });

        return i + 1;
    }

    function quickSortHelper(low, high) {
        if (low < high) {
            const pi = partition(low, high);

            quickSortHelper(low, pi - 1);
            quickSortHelper(pi + 1, high);
        }
    }

    quickSortHelper(0, array.length - 1);

    return { algorithmName: 'Quick Sort', steps };
}