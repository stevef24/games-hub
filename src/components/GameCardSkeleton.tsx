import { Card, Skeleton, SkeletonText, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width="300px" borderRadius="8px" overflow="hidden">
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
