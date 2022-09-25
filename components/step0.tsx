import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

interface step0Props {
    setStep: (arg0: number) => void
}

export default function Step0({ setStep }: step0Props) {
    const onClick = () => {
        setStep(1)
    }

    return (
        <HStack spacing="24px">
            <InputGroup>
                <Input placeholder="Enter city, state, or zip code" />
                <InputRightElement>
                    <Button
                        colorScheme="brand"
                        variant="solid"
                        onClick={onClick}
                    >
                        <BsArrowRight />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </HStack>
    )
}